import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public modalRef: any;
  @ViewChild('orderDetailsModal') orderDetailsModalRef!: TemplateRef<any>;
  public model!: NgbDateStruct;
  public model1!: NgbDateStruct;
  public date!: { year: number; month: number };

  constructor(private calendar: NgbCalendar, private modalService: NgbModal) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
  selectToday1() {
    this.model1 = this.calendar.getToday();
  }

  isSearchFilter: boolean = false;
  isDropdownOpen: boolean = false;
  filterDropdownOpen: boolean = false;

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

  public orders = [
    {
      orderTitle: 'מס. הזמנה 4001105623 ',
      orderIcon: '',
      descTitle: 'תיאור הזמנה',
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
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
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
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
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
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
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
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
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
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
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
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
      descDetail: 'לא לאספקה - כיסוי להזמנה 4001065837 תעודת משלוח 8833.21.0152',
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
