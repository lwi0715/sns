export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Username', // sanity에서 데이터 입력할 때 보여지는 라벨
      name: 'username', // 사용할 때 쓰는 이름
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'ImageUrl',
      name: 'imageUrl',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
          validation: (Rule) => Rule.unique(), // 중복 방지
        },
      ],
    },
    {
      title: 'Follower',
      name: 'follower',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
          validation: (Rule) => Rule.unique(),
        },
      ],
    },
    {
      title: 'Bookmarked',
      name: 'bookmarked',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
          validation: (Rule) => Rule.unique(),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
