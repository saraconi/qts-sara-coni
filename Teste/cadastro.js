const cadastroForm = document.getElementById('cadastroForm');
const cUsuario = document.getElementById('cUsuario');
const cSenha = document.getElementById('cSenha');
const cConfirmaSenha = document.getElementById('cConfirmaSenha');

cadastroForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validação de senha no frontend
    if (cSenha.value !== cConfirmaSenha.value) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                usuario: cUsuario.value,
                senha: cSenha.value
            })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert('Cadastro realizado com sucesso! Você já pode fazer login.');
            window.location.href = 'login.html'; // Redireciona para o login
        } else {
            alert(data.error || 'Erro ao realizar cadastro.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao conectar com o servidor. Verifique se o Node está rodando.');
    }
});