import mongoose, { Types } from 'mongoose';
export declare const userModel: mongoose.Model<{
    username: string;
    password: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const contentModel: mongoose.Model<{
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    type: string;
    title: string;
    link: string;
    tags: Types.ObjectId[];
    userId?: Types.ObjectId | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const tagModel: mongoose.Model<{
    title: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
}, mongoose.Document<unknown, {}, {
    title: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const linkModel: mongoose.Model<{
    userId: Types.ObjectId;
    hash: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: Types.ObjectId;
    hash: string;
}, mongoose.Document<unknown, {}, {
    userId: Types.ObjectId;
    hash: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: Types.ObjectId;
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export default mongoose;
//# sourceMappingURL=db.d.ts.map