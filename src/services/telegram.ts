import axios from 'axios'
import { message } from 'antd'
import { _interfaces } from '../_interfaces'
import { TG_BOT_DATA } from '../_constants'

// Get bot updates
// https://api.telegram.org/bot5668368771:AAGY3FWnRglhcdnFjOmUDgcN2QgDFXvQ3Ow/getUpdates

export const sendMessage = async (data: _interfaces) => {
  try {
    const { token, chatId } = TG_BOT_DATA
    const msg = createMessage(data)
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${msg}&parse_mode=html`
    const result = await axios.get(url)
    message.success('Спасибо! Мы свяжемся с Вами в ближайшее время')
    return result
  } catch (err) {
    message.error('Что-то пошло не так :( сообщите, пожалуйста, об ошибке по телефону или в соцсетях')
  }
}

export const createMessage = (data: _interfaces) => {
  return `<b>Имя: </b> ${data.name}%0A<b>Телефон:</b> ${data.tel}%0A<b>Площадь:</b> ${data.square} кв.м.%0A<b>Точки света:</b> ${data.lightPoints} шт.%0A<b>Карниз:</b> ${data.cornice} пог.м.%0A<b>Скрытый карниз:</b> ${data.secretCornice} пог.м.%0A<b>Доп. инфо:</b> ${data.additionalInfo}%0A<b>Стоимость:</b> ${data.totalAmount}$`
}
