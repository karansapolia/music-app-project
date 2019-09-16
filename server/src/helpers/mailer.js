import nodemailer from 'nodemailer';
import path from 'path';
import pug from 'pug';
import config from '../configs/env';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL,
    pass: config.EMAIL_PASSWORD,
  },
});

const sendMail = async function sendMail(data) {
  const { type, mailOptions, variables } = data;
  const inputs = { ...mailOptions, type };
  const filePath = path.resolve(__dirname, `../../mailTemplates/${type}.pug`);
  const pugToHtml = pug.renderFile(filePath, variables);
  inputs.html = pugToHtml;
  await transporter.sendMail(inputs);
};

export default sendMail;
