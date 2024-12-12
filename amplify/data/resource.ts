import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

// スキーマを定義
const schema = a.schema({
  MenuItem: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      description: a.string(),
      category: a.string(),
      price: a.float(),
      isVegetarian: a.boolean()
    }).authorization(allow => [allow.publicApiKey()]), // 公開APIキーで認証
});

// クライアント用スキーマの型定義
export type Schema = ClientSchema<typeof schema>;

// データリソースの定義
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey', // APIキーをデフォルト認証方式として設定
    apiKeyAuthorizationMode: { expiresInDays: 30 } // APIキーの有効期限を30日として設定
  },
  name: "MenuItemApi" // AppSyncの名前
});