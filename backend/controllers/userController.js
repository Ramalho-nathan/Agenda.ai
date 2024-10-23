export const loginUser = (req, res) =>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: 'preencha todos os campos'});
    }

    res.status(200).json({message: 'Login Bem-sucedido'})
}