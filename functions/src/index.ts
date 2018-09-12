import * as functions from 'firebase-functions';
import { DataSnapshot } from 'firebase-functions/lib/providers/database';
// tslint:disable-next-line:no-duplicate-imports
import { EventContext } from 'firebase-functions';
import * as nodemailer from 'nodemailer';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const onOrderCreate = functions.database
  .ref('orders/{shopName}/{orderId}')
  .onCreate((snapshot: DataSnapshot, context: EventContext) => {
    const shopName = context.params.shopName;
    const orderId = context.params.orderId;

    const orderData = snapshot.val();
    const emailTo = orderData.user.email;

    // Sending Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'anup.blade@gmail.com',
        pass: 'phantonn'
      }
    });

    let productList = '';
    orderData.orders.forEach(product => {
      const str = `
        <tr>
          <td>${product.name}</td>
          <td>${product.quantity}</td>
          <td>LMC ${product.total}</td>
        </tr>
      `;
      productList += str;
    });

    const total = `
      <tr>
        <td>Total</td>
        <td></td>
        <td>LMC ${orderData.total}</td>
      </tr>
    `;
    productList += total;

    const html = `
      <div>
        Thank you for your interest in Bridge Mohan - ${shopName
          .charAt(0)
          .toUpperCase() + shopName.slice(1)}. 
        Your Order has been placed:
        
        <table>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th> 
            <th>Price</th>
          </tr>
          ${productList}
        </table>

        <br/>
        
        <p>-Team Bridge Mohan - ${shopName.charAt(0).toUpperCase() +
          shopName.slice(1)}</p>
      </div>
      <hr>
    `;

    const mailOptions = {
      from: 'anup.blade@gmail.com', // sender address
      to: emailTo, // list of receivers
      subject: `Bridge Mohan - ${shopName.charAt(0).toUpperCase() +
        shopName.slice(1)} Order Confirmation`, // Subject line
      html: html // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log('error', JSON.stringify(err, null, 2));
      } else {
        console.log(`Email Sent to ${emailTo} for orderId: ${orderId}`);
      }
    });
  });
