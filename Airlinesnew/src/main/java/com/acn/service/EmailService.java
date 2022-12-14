package com.acn.service;

 

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

import com.sun.mail.handlers.text_html;

 

@Component
public class EmailService {
    @Autowired
    private MailSender mailSender;
    public void sendEmailForNewRegistration(String email,String text_html,String subject) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("airlinesproject881@outlook.com");
        message.setTo(email);
        message.setSubject(subject);
        message.setText(text_html);
        mailSender.send(message);

 

    }
}