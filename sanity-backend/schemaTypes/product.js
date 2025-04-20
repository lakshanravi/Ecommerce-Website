//like database structure
export default {
  //db name
  //this is the name of the collection in sanity studio
  name: 'product',
  title: 'Product',
  type: 'document',
  //below are the fields of the document.
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      //this is an array of images
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        //this is the options for the image for crop the image for user experience
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    //slug is a unique identifier for the product
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        //generate unique slug for the product based on the name of the product
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
  ],
}
