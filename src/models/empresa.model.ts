import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('empresa')

export class Empresa {
  @PrimaryGeneratedColumn()
  idEmpresa?: number

  @Column('varchar', { length: 150, unique: true })
  nomeEmpresa: string

  @Column ('varchar', { length: 11})
  telefoneEmpresa: string
}
