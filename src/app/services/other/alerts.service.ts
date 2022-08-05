import { Injectable } from '@angular/core';

declare var alertify:any

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}

  confirm(title: string, message:string, okCallback: () => any) {
    alertify.confirm(title, message, function() {
      okCallback();
    }, function() {});
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
