import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from './User';
import { Domain } from './Domain';

@Entity('domain_lang')
export class DomainLang {

  @ManyToOne(type => Domain)
  @JoinColumn({ name: 'domain_id', referencedColumnName: 'id' })
  @PrimaryColumn({ length: 11, name: 'domain_id' })
  domain: Domain;

  @PrimaryColumn({ length: 5, name: 'lang_id' })
  langId: string;

}
