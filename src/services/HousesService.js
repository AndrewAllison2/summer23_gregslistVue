import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    // logger.log('got houses', res.data)
    const houses = res.data.map(home => new House(home))

    AppState.houses = houses
    logger.log('Appstate data bb', AppState.houses)
  }

  async createHouse(houseData) {
    const res = await api.post('api/houses', houseData)
    // logger.log('created home', res.data)
    const house = new House(res.data)
    AppState.houses.push(house)
  }
}

export const housesService = new HousesService()