import {defineType, defineField} from "sanity"

export default defineType({
    name: 'topmovies',
    type: 'document',
    title: 'Topmovies',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name'
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        title: 'Slug'
      }),
      defineField({
        name: 'type',
        type: 'string',
        title: 'Type'
      }),
      defineField({
        name: 'stars',
        type: 'number',
        title: 'Stars'
      }),
      defineField({
        name: 'image',
        type: 'image',
        title: 'Image'
      })
    ]
  })