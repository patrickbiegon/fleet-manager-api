﻿using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.Options;
using PartnerRiskManager.Models;
using PartnerRiskManager.Services.Dependecy;
using PartnerRiskManager.Settings;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;


namespace PartnerRiskManager.Services
{
    public class MailService : IMailService
    {
        private readonly MailSettings _mailSettings;
        public MailService(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }

        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\RegisterEmail.html";
            StreamReader str = new StreamReader(FilePath);
            string MailText = str.ReadToEnd();
            str.Close();
            // MailText = MailText.Replace("[username]", request.UserName).Replace("[email]", request.ToEmail);
            MailText = MailText.Replace("[password]", mailRequest.Body);
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));
            email.Subject = mailRequest.Subject;
            var builder = new BodyBuilder();
            if (mailRequest.Attachments != null)
            {
                byte[] fileBytes;
                foreach (var file in mailRequest.Attachments)
                {
                    if (file.Length > 0)
                    {
                        using (var ms = new MemoryStream())
                        {
                            file.CopyTo(ms);
                            fileBytes = ms.ToArray();
                        }
                        builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
                    }
                }
            }
            builder.HtmlBody = MailText;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }

        public async Task SendResetPassEmailAsync(ResetMailRequest resetMailRequest)
        {
            string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\ResetPasswordEmail.html";
            StreamReader str = new StreamReader(FilePath);
            string MailText = str.ReadToEnd();
            str.Close();
            // MailText = MailText.Replace("[username]", request.UserName).Replace("[email]", request.ToEmail);
            MailText = MailText.Replace("[uid]", resetMailRequest.UserId).Replace("[token]", resetMailRequest.Token);
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(resetMailRequest.ToEmail));
            email.Subject = "Reset your password";
            var builder = new BodyBuilder();
            builder.HtmlBody = MailText;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }

        public async Task SendConfirmEmailEmailAsync(ResetMailRequest resetMailRequest)
        {
            string FilePath = Directory.GetCurrentDirectory() + "\\Templates\\ConfirmEmailEmail.html";
            StreamReader str = new StreamReader(FilePath);
            string MailText = str.ReadToEnd();
            str.Close();
            // MailText = MailText.Replace("[username]", request.UserName).Replace("[email]", request.ToEmail);
            MailText = MailText.Replace("[uid]", resetMailRequest.UserId).Replace("[token]", resetMailRequest.Token);
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_mailSettings.Mail);
            email.To.Add(MailboxAddress.Parse(resetMailRequest.ToEmail));
            email.Subject = "Confirm your email";
            var builder = new BodyBuilder();
            builder.HtmlBody = MailText;
            email.Body = builder.ToMessageBody();
            using var smtp = new SmtpClient();
            smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
            smtp.Authenticate(_mailSettings.Mail, _mailSettings.Password);
            await smtp.SendAsync(email);
            smtp.Disconnect(true);
        }
    }    
}

