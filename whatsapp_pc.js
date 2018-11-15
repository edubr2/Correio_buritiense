<!-- WhatsHelp.io widget -->
    (function () {
        var options = {
					
					
					call: "(98) 98116-8061", // Call phone number

            call_to_action: "Message us", // Call to action
                        whatsapp: "+55 (98) 98116-8061", // WhatsApp number
           
            company_logo_url: "https://i.imgur.com/1UQh4fw.png", // URL of company logo (png, jpg, gif)
            greeting_message: "Bem vindo ao site do Correio Buritiense, envie-nos seu comentário ou sugestão de notícia.", // Text of greeting message
            call_to_action: "Fale Conosco", // Call to action
            button_color: "#A8CE50", // Color of button
            position: "left", // Position may be 'right' or 'left'
            order: "sms,facebook,whatsapp,call", // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

<!-- /WhatsHelp.io widget -->
