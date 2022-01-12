import { Component, Injectable, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [   
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class HomeComponent extends NgbDateParserFormatter implements OnInit {

  parse(value: string): NgbDateStruct | null {
    console.log(`value`, value)
    if (value) {
      const date = value.split('-');
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }
  format(date: NgbDateStruct | null): string {
    return date ? date.day + '/' + date.month + '/' + date.year : '';
  }
  
  public modalRef: any;
  @ViewChild('orderDetailsModal') orderDetailsModalRef!: TemplateRef<any>;
  @ViewChild('orderInvoiceModal') orderInvoiceModalRef!: TemplateRef<any>;
  @ViewChild('orderPaymentModal') orderPaymentModalRef!: TemplateRef<any>;
  @ViewChild('securityCheckFormModal') securityCheckFormModalRef!: TemplateRef<any>;
  @ViewChild('successFormModal') successFormModalRef!: TemplateRef<any>;
  public model!: NgbDateStruct;
  public model1!: NgbDateStruct;
  public model2!: NgbDateStruct;
  public model3!: NgbDateStruct;
  public model4!: NgbDateStruct;
  public date!: { month: number; year: number };

  constructor(private calendar: NgbCalendar, private modalService: NgbModal) {
    super();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
  selectToday1() {
    this.model1 = this.calendar.getToday();
  }
  selectToday2() {
    this.model2 = this.calendar.getToday();
  }
  selectToday3() {
    this.model3 = this.calendar.getToday();
  }
  selectToday4() {
    this.model4 = this.calendar.getToday();
  }

  isSearchFilter: boolean = false;

  ngOnInit(): void {}
  public closeModalEvent(isCloseModal: any): void {
    if (isCloseModal) {
      this.modalRef.close();
    }
  }
  public orderDetailsPopup(): void {
    this.modalRef = this.modalService.open(this.orderDetailsModalRef, {
      centered: true,
      size: 'xl',
      modalDialogClass: 'order-details-popup',
    });
  }
  public orderInvoicePopup(): void {
    this.modalRef = this.modalService.open(this.orderInvoiceModalRef, {
      centered: true,
      size: 'xl',
      modalDialogClass: 'order-details-popup',
    });
  }
  public orderPaymentPopup(): void {
    this.modalRef = this.modalService.open(this.orderPaymentModalRef, {
      centered: true,
      size: 'xl',
      modalDialogClass: 'order-details-popup',
    });
  }
  public securityCheckForm(): void {
    this.modalRef = this.modalService.open(this.securityCheckFormModalRef, {
      centered: true,
      size: 'xl',
      modalDialogClass: 'security-modal',
    });
  }
  public successForm(): void {
    this.modalRef = this.modalService.open(this.successFormModalRef, {
      centered: true,
      size: 'xl',
      windowClass: 'success-modal',
      backdropClass: 'success-modal-backdrop'
    });
  }

  public orders = [
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: ['לא לאספקה - כיסוי להזמנה 4001065837',' תעודת משלוח 8833.21.0152'],
      statusTitle: 'סטאטוס',
      statusDetail: 'סופקהטרם',
      valueTitle: 'ערך הזמנה',
      valueDetail: '031.48,737',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. אספקה ראשון',
      deliveryDetail: '15/12/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: ['לא לאספקה - כיסוי להזמנה 4001065837',' תעודת משלוח 8833.21.0152'],
      statusTitle: 'סטאטוס',
      statusDetail: 'סופקהטרם',
      valueTitle: 'ערך הזמנה',
      valueDetail: '031.48,737',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. אספקה ראשון',
      deliveryDetail: '15/12/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: ['לא לאספקה - כיסוי להזמנה 4001065837',' תעודת משלוח 8833.21.0152'],
      statusTitle: 'סטאטוס',
      statusDetail: 'סופקהטרם',
      valueTitle: 'ערך הזמנה',
      valueDetail: '031.48,737',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. אספקה ראשון',
      deliveryDetail: '15/12/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: ['לא לאספקה - כיסוי להזמנה 4001065837',' תעודת משלוח 8833.21.0152'],
      statusTitle: 'סטאטוס',
      statusDetail: 'סופקהטרם',
      valueTitle: 'ערך הזמנה',
      valueDetail: '031.48,737',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. אספקה ראשון',
      deliveryDetail: '15/12/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: ['לא לאספקה - כיסוי להזמנה 4001065837',' תעודת משלוח 8833.21.0152'],
      statusTitle: 'סטאטוס',
      statusDetail: 'סופקהטרם',
      valueTitle: 'ערך הזמנה',
      valueDetail: '031.48,737',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. אספקה ראשון',
      deliveryDetail: '15/12/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: ['לא לאספקה - כיסוי להזמנה 4001065837',' תעודת משלוח 8833.21.0152'],
      statusTitle: 'סטאטוס',
      statusDetail: 'סופקהטרם',
      valueTitle: 'ערך הזמנה',
      valueDetail: '031.48,737',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. אספקה ראשון',
      deliveryDetail: '15/12/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: ['לא לאספקה - כיסוי להזמנה 4001065837',' תעודת משלוח 8833.21.0152'],
      statusTitle: 'סטאטוס',
      statusDetail: 'סופקהטרם',
      valueTitle: 'ערך הזמנה',
      valueDetail: '031.48,737',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. אספקה ראשון',
      deliveryDetail: '15/12/2021'
    },
  ]

  public supplies = [
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: 'assets/images/info-icon-red.svg',
      descTitle: 'תיאור הזמנה',
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
      valueTitle: 'ת.אספקה',
      valueDetail: '15/08/2021',
      currencyTitle: 'כמות מוזמנת',
      currencyDetail: '10000.000',
      deliveryTitle: 'יתרה לאספקה',
      extraClass: 'text-red',
      deliveryDetail: '10000'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: 'assets/images/info-icon-orange.svg',
      descTitle: 'תיאור הזמנה',
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
      valueTitle: 'ת.אספקה',
      valueDetail: '15/08/2021',
      currencyTitle: 'כמות מוזמנת',
      currencyDetail: '10000.000',
      deliveryTitle: 'יתרה לאספקה',
      extraClass: 'text-red',
      deliveryDetail: '10000'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
      valueTitle: 'ת.אספקה',
      valueDetail: '15/08/2021',
      currencyTitle: 'כמות מוזמנת',
      currencyDetail: '10000.000',
      deliveryTitle: 'יתרה לאספקה',
      extraClass: '',
      deliveryDetail: '10000'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
      valueTitle: 'ת.אספקה',
      valueDetail: '15/08/2021',
      currencyTitle: 'כמות מוזמנת',
      currencyDetail: '10000.000',
      deliveryTitle: 'יתרה לאספקה',
      extraClass: '',
      deliveryDetail: '10000'
    },
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
      valueTitle: 'ת.אספקה',
      valueDetail: '15/08/2021',
      currencyTitle: 'כמות מוזמנת',
      currencyDetail: '10000.000',
      deliveryTitle: 'יתרה לאספקה',
      extraClass: '',
      deliveryDetail: '10000'
    },
  ]

  public invoices = [
    {
      orderTitle: 'מס. חשבונית ספק 8824.21.000246',
      orderIcon: '',
      descTitle: 'סטאטוס חשבונית',
      descDetail: '20/10/2021 נמצא בטיפול מ.חשבונות, צפוי לתשלום בתאריך',
      valueTitle: 'קוד סוג חשבונית',
      valueDetail: 'הודעת חיוב כללית',
      currencyTitle: 'ת. חשבונית',
      currencyDetail: '22/08/2021',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      deliveryDetail: '24/08/2021'
    },
    {
      orderTitle: 'מס. חשבונית ספק 8824.21.000246',
      orderIcon: '',
      descTitle: 'סטאטוס חשבונית',
      descDetail: '20/10/2021 נמצא בטיפול מ.חשבונות, צפוי לתשלום בתאריך',
      valueTitle: 'קוד סוג חשבונית',
      valueDetail: 'הודעת חיוב כללית',
      currencyTitle: 'ת. חשבונית',
      currencyDetail: '22/08/2021',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      deliveryDetail: '24/08/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105625 ',
      orderIcon: '',
      descTitle: 'סטאטוס חשבונית',
      descDetail: '20/10/2021 נמצא בטיפול מ.חשבונות, צפוי לתשלום בתאריך',
      valueTitle: 'קוד סוג חשבונית',
      valueDetail: 'הודעת חיוב כללית',
      currencyTitle: 'ת. חשבונית',
      currencyDetail: '22/08/2021',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      deliveryDetail: '24/08/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105625 ',
      orderIcon: '',
      descTitle: 'סטאטוס חשבונית',
      descDetail: '20/10/2021 נמצא בטיפול מ.חשבונות, צפוי לתשלום בתאריך',
      valueTitle: 'קוד סוג חשבונית',
      valueDetail: 'הודעת חיוב כללית',
      currencyTitle: 'ת. חשבונית',
      currencyDetail: '22/08/2021',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      deliveryDetail: '24/08/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105625 ',
      orderIcon: '',
      descTitle: 'סטאטוס חשבונית',
      descDetail: '20/10/2021 נמצא בטיפול מ.חשבונות, צפוי לתשלום בתאריך',
      valueTitle: 'קוד סוג חשבונית',
      valueDetail: 'הודעת חיוב כללית',
      currencyTitle: 'ת. חשבונית',
      currencyDetail: '22/08/2021',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      deliveryDetail: '24/08/2021'
    },
    {
      orderTitle: 'מס. הזמנה 4001105625 ',
      orderIcon: '',
      descTitle: 'סטאטוס חשבונית',
      descDetail: '20/10/2021 נמצא בטיפול מ.חשבונות, צפוי לתשלום בתאריך',
      valueTitle: 'קוד סוג חשבונית',
      valueDetail: 'הודעת חיוב כללית',
      currencyTitle: 'ת. חשבונית',
      currencyDetail: '22/08/2021',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      deliveryDetail: '24/08/2021'
    },
  ]

  public payment = [
    {
      orderTitle: 'מס. מסמך תשלום 32334342342',
      orderIcon: '',
      descTitle: 'ת. רישום מסמך התשלום',
      descDetail: '22/08/2021',
      valueTitle: 'סכום ששולם במטבע הסכום',
      valueDetail: '737,031.48',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      paymentmore: 'פרטים נוספים'
    },
    {
      orderTitle: 'מס. מסמך תשלום 32334342342',
      orderIcon: '',
      descTitle: 'ת. רישום מסמך התשלום',
      descDetail: '22/08/2021',
      valueTitle: 'סכום ששולם במטבע הסכום',
      valueDetail: '737,031.48',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      paymentmore: 'פרטים נוספים'
    },
    {
      orderTitle: 'מס. מסמך תשלום 32334342342',
      orderIcon: '',
      descTitle: 'ת. רישום מסמך התשלום',
      descDetail: '22/08/2021',
      valueTitle: 'סכום ששולם במטבע הסכום',
      valueDetail: '737,031.48',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      paymentmore: 'פרטים נוספים'
    },
    {
      orderTitle: 'מס. מסמך תשלום 32334342342',
      orderIcon: '',
      descTitle: 'ת. רישום מסמך התשלום',
      descDetail: '22/08/2021',
      valueTitle: 'סכום ששולם במטבע הסכום',
      valueDetail: '737,031.48',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      paymentmore: 'פרטים נוספים'
    },
    {
      orderTitle: 'מס. מסמך תשלום 32334342342',
      orderIcon: '',
      descTitle: 'ת. רישום מסמך התשלום',
      descDetail: '22/08/2021',
      valueTitle: 'סכום ששולם במטבע הסכום',
      valueDetail: '737,031.48',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      paymentmore: 'פרטים נוספים'
    },
    {
      orderTitle: 'מס. מסמך תשלום 32334342342',
      orderIcon: '',
      descTitle: 'ת. רישום מסמך התשלום',
      descDetail: '22/08/2021',
      valueTitle: 'סכום ששולם במטבע הסכום',
      valueDetail: '737,031.48',
      currencyTitle: 'סוג מטבע',
      currencyDetail: 'USD',
      deliveryTitle: 'ת. קבלת חשבונית בחח״י',
      extraClass: '',
      paymentmore: 'פרטים נוספים'
    },
  ]
}
