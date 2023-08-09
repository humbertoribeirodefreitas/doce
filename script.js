document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('form-contato');

    form.addEventListener('submit', function(event) {

        event.preventDefault(); // Impede o envio padrão do formulário



        const name = form.querySelector('input[name="name"]').value;

        const email = form.querySelector('input[name="email"]').value;

        const message = form.querySelector('textarea[name="message"]').value;



        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {

            alert('Por favor, preencha todos os campos.');

        } else {

            // Aqui você pode adicionar o código para enviar o formulário para o servidor

            alert('Formulário enviado com sucesso!');

            form.reset(); // Limpa os campos após o envio

        }

    });

});