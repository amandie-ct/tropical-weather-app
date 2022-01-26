const cityStore = createSlice({
    name: 'cityStore',
    initialState: {
        cityName: ''
    },
    reducers: {
        getCityName(state){
            state.cityName//.modificacao no estado
        }
    }
})

export const { getCityName } = cityStore.actions;

