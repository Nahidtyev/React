import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
  fields:[
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
    }),
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
    }),
    defineField({
        name: 'price',
        title: 'Price',
        type: 'string',
    }),
    defineField({
        name: 'distribution',
        title: 'Distribution',
        type: 'string',
    }),
    defineField({
        name: 'clicks',
        title: 'Clicks',
        type: 'number',
    }),
    defineField({
        name: 'view',
        title: 'View',
        type: 'number',
    }),
    defineField({
        name: 'engagement',
        title: 'Engagement',
        type: 'number',
    })
  ]
})