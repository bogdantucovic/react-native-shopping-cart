import React, { PureComponent, Fragment } from "react";
import Swiper from "react-native-swiper";
import { styles, ImgStyled } from "./Gallery.style";

class Gellery extends PureComponent {
  render() {
    const { images } = this.props;
    return (
      <Fragment>
        <Swiper showsPagination={false} style={styles.swiper}>
          {images.map(image => (
            <Fragment key={image}>
              <ImgStyled
                source={{
                  uri: image
                }}
              />
            </Fragment>
          ))}
        </Swiper>
      </Fragment>
    );
  }
}

export default Gellery;
