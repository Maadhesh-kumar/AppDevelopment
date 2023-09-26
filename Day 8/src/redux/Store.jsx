 import { configureStore, createSlice } from '@reduxjs/toolkit';
 import userReducer from './userSlice'


// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products:[
      {
        "id": 1,
        "imageUrl":"https://wallpapercave.com/dwp1x/wp4128926.jpg",
        "flightNumber": "E123",
        "from": "New York",
        "to": "Los Angeles",
        "price": 50000,
      },
      {
        "id": 2,
        "imageUrl":"https://wallpapercave.com/wp/wp3150176.jpg",
        "flightNumber": "ABC456",
        "from": "Chicago",
        "to": "Miami",
        "price": 45000,
      },
      {
        "id": 3,
        "imageUrl":"https://wallpapercave.com/dwp1x/wp4128796.jpg",
        "flightNumber": "FN789",
        "from": "San Francisco",
        "to": "Seattle",
        "departureDate": "2023-10-02T09:15:00Z",
        "returnDate": "2023-10-07T14:45:00Z",
        "price": 35000,
      },
      {
        "id": 4,
        "imageUrl":"https://wallpapercave.com/dwp1x/wp4128796.jpg",
        "flightNumber": "JF123",
        "from": "Los Angeles",
        "to": "New York",
        "price": 44000,
      }
    ]
  },
  reducers: {},
});
const store = configureStore({
    reducer: {
      featuredProducts: featuredProductsSlice.reducer,
      user:userReducer,

      

    

    },
  });

 export default store