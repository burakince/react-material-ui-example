import React, { Component } from "react";

import { Subheader, GridList, GridTile } from 'material-ui';
import ToggleStar from './components/ToggleStar';
import withWidth from 'material-ui/utils/withWidth';

const tilesData = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    id: 2,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    id: 3,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    id: 4,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    id: 5,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    id: 6,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    id: 7,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    id: 8,
    img: 'https://raw.githubusercontent.com/callemall/material-ui/master/docs/src/www/images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class MeetingLayout extends Component {
  render() {
    return (
      <GridList cols={this.props.width} padding={1}>
        <Subheader>December</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={
              <ToggleStar />
            }
          >
            <img src={tile.img} alt={tile.title} />
          </GridTile>
        ))}
      </GridList>
    )
  }
}

export default withWidth()(MeetingLayout);
