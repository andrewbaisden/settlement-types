import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  settlement: [
    {
      type: 'Hamlet',
      size: '1 - 100',
      description:
        'A hamlet is a smaller-scale community than a town or village. The term "smaller settlement" is frequently only a colloquial term for a smaller settlement, or even a subdivision or satellite organisation to a bigger community.',
      img: 'https://res.cloudinary.com/d74fh3kw/image/upload/v1691415034/hamlet_n50lem.jpg',
    },
    {
      type: 'Village',
      size: '101 - 3000',
      description:
        'Although the term is sometimes used to cover both hamlets and smaller towns, a village is a grouped human settlement or community, bigger than a hamlet but less than a town, with a population generally ranging from a few hundred to a few thousand.',
      img: 'https://res.cloudinary.com/d74fh3kw/image/upload/v1691415578/village_n7hoyb.jpg',
    },
    {
      type: 'Town',
      size: '3001 - 5000',
      description:
        'An urban area, or town, is a place where people reside. It alludes to the entirety of the human community, including all of its social, material, organisational, spiritual, and cultural components. Towns are often smaller than cities and bigger than villages, however the criteria used to differentiate between them vary greatly throughout the world.',
      img: 'https://res.cloudinary.com/d74fh3kw/image/upload/v1691416139/town_lhwwza.jpg',
    },
    {
      type: 'City',
      size: '5001 - Infinity',
      description:
        'A large-scale urban area is referred to as a city. It can be described as a location that is permanently populated, has clearly defined administrative boundaries, and whose inhabitants focus mostly on non-agricultural jobs. For housing, transportation, sanitation, utilities, land use, the manufacturing of commodities, and communication, cities often have vast systems.',
      img: 'https://res.cloudinary.com/d74fh3kw/image/upload/v1691416356/city_aw2lvq.jpg',
    },
  ],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
