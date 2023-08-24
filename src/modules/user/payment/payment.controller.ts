import { Controller, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { PaymentEvents } from '../../../common/utils';

@Controller('payment')
export class PaymentController {

  @EventPattern(PaymentEvents.PAYMENT_ORDER_CREATION)
  paymentOrder(@Payload() message) {
    console.log(message);
  }

}
