import { tema } from './tema';
import { User } from './User';

export class Postagem{
  public id: number
  public titulo: string
  public texto: string
  public data: Date
  public curtida: number
  public imagem: string
  public usuario: User
  public tema: tema
}
