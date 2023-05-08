import { Field, InputType, Int } from '@nestjs/graphql';

import { TagUpdateManyWithoutArticlesInput } from '../tag/tag-update-many-without-articles.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { UserUpdateOneWithoutArticlesInput } from '../user/user-update-one-without-articles.input';

@InputType()
export class ArticleUpdateWithoutCommentsInput {
    @Field(() => String, { nullable: true })
    articleId?: string;

    @Field(() => String, { nullable: true })
    slug?: string;

    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    body?: string;

    @Field(() => TagUpdateManyWithoutArticlesInput, { nullable: true })
    tags?: TagUpdateManyWithoutArticlesInput;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

    @Field(() => Int, { nullable: true })
    favoritesCount?: number;

    @Field(() => UserUpdateOneWithoutArticlesInput, { nullable: true })
    author?: UserUpdateOneWithoutArticlesInput;

    @Field(() => UserUpdateManyWithoutFavoriteArticlesInput, { nullable: true })
    favoritedBy?: UserUpdateManyWithoutFavoriteArticlesInput;
}
