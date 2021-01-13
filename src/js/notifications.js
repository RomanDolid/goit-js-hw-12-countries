import * as PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

const notifications = {
  onOverflowList() {
    PNotify.notice({
      title: 'Слишком много совпадений',
      text: 'Введите больше данных',
    });
  },
  onNotFound() {
    PNotify.info({
      title: 'По запросу ничего не найдено',
      text: 'Проверьте правильность ввода',
    });
  },
  onError() {
    PNotify.error({
      title: 'Что-то пошло не так :(',
      text: 'Повторите запрос',
    });
  },
};

export default notifications;
