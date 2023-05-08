import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], { nullable: true })
    create?: Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentCreateOrConnectWithoutArticleInput], { nullable: true })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

    @Field(() => [CommentWhereUniqueInput], { nullable: true })
    connect?: Array<CommentWhereUniqueInput>;
}
