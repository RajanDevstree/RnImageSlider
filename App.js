import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Modal,
  Image,StyleSheet
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';
import ImageViewer from 'react-native-image-zoom-viewer';

const App = () => {
  const [imageModal, setImageModal] = useState(false);

  const pinchToZoomImage = [
    {
      url: 'https://wallpaperaccess.com/full/51370.jpg',
      props: {},
    },
    {
      url: 'https://pixnio.com/free-images/2020/05/27/2020-05-27-06-46-05-550x367.jpeg',
      props: {},
    },
    {
      url: 'https://i.pinimg.com/originals/a0/99/2a/a0992afa9c1f2b47db51d11f69c897f3.jpg',
      props: {},
    },
  ];

  const MainSliderImageList = pinchToZoomImage.map(item => item.url)


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <SliderBox
        images={MainSliderImageList}
        onCurrentImagePressed={index => {
          setImageModal(index);
        }}
      />

      {imageModal || imageModal === 0 ? (
        <Modal transparent={true} visible={true} onRequestClose={() => {}}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalImageItem}
              onPress={() => {
                setImageModal(false);
              }}>
              <Image
                source={{
                  uri: 'https://pngfreepic.com/wp-content/uploads/2021/02/close-icon-png-freepic-4.png',
                }}
                style={styles.closeButton}
              />
            </TouchableOpacity>
            <View style={styles.modalImageViewerContainer}>
              <ImageViewer
                index={imageModal}
                backgroundColor={'rgba(0,0,0,0.7)'}
                imageUrls={pinchToZoomImage}
                renderImage={item => (
                  <FastImage
                    style={item.style}
                    onPress={() => {}}
                    source={{
                      uri: item.source.uri,
                      priority: FastImage.priority.normal,
                      cache: FastImage.cacheControl.cacheOnly,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                )}
              />
            </View>
          </View>
        </Modal>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7),',
  },
  modalImageItem: {
    position: 'absolute',
    left: '87%',
    top: 40,
    zIndex: 100,
  },
  modalImageViewerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  closeButton: {
    height: 30,
    width: 30,
  },
});

export default App;
