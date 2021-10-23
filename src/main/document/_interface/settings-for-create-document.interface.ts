import { Author } from "../_entity/authors.entity";
import { Genre } from "../_entity/genres.entity";

export class SettingsForDocumentInterface {
    genre: Genre[];
    authors: Author[];
}
