import { PostagemModel } from "./PostagemModel";

export class UsuarioModel{
    public id: number;
    public nome: string;
    public foto: string;
    public usuario: string;
    public senha: string;
    public tipo: string;
    public postagem: PostagemModel[];
}