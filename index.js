const TelegramApi = require('node-telegram-bot-api')
const token = '5549905024:AAGqqrHaw6oX91wSjJvGQdFH3vVCa1hnZAQ'
const bot = new TelegramApi (token, {polling: true}) 
const keyboard = [
    [{text: 'Да', url: 'https://supitweb.com/'}],
    [{text: 'Нет', callback_data: 'hHhHahha'}],
]


bot.setMyCommands ([
    {command: '/start', description: 'Cделать заказ'},
    {command: '/info', description: 'Получить ссылку на наш сайт'},
    {command: '/contact', description: 'Написать нам'},
]) 

bot.on ("message",async msg =>{
    const text = msg.text
    const chatId = msg.chat.id;
    const name = msg.chat.first_name;
     console.log (msg)
     
     if (text==='/start'){
       return bot.sendMessage(chatId, `Привет, ${name}! Хотите оформить заказ? 🧐`,{reply_markup: {inline_keyboard:keyboard}
    }); 

    }
     if (text === '/info') {
        return bot.sendMessage(chatId, `Вот наш сайт https://supitweb.com/ !`)
     }

     if (text === '/contact') {
        return bot.sendMessage(chatId, `Email: sup.it@mail.ru, Telegram: @dozer_stoun, Inst:  `)
     }
    return bot.sendMessage(chatId,'Прости, но я тебя не понял! ☹️ Лучше этот парень ответит на твои вопросы - @dozer_stoun')
})
bot.on ('callback_query', msg =>{
    const data = msg.data;
    const chatId = msg.message.chat.id;
    bot.sendMessage(chatId, 'Мое дело предложить!😉 Можете нажать на кнопку меню,там много полезного ↙️↙️↙️ ')
    console.log (msg)
})