import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea, FileInput } from 'flowbite-react';

const MovieForm = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Movie title" />
        </div>
        <TextInput id="title" type="text" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="director" value="Movie director" />
        </div>
        <TextInput id="director" type="text" required />
      </div>
      <div>
        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the rating</label>
        <select id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option>1 Star</option>
          <option>2 Stars</option>
          <option>3 Stars</option>
          <option>4 Stars</option>
          <option>5 Stars</option>
        </select>
      </div>
      <div>
        <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the genre</label>
        <select id="genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option>Comedy</option>
          <option>Action</option>
          <option>Science fiction</option>
          <option>Romance</option>
          <option>Spy</option>
        </select>
      </div>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="description" value="Movie description" />
        </div>
        <Textarea id="description" placeholder="Describe your movie..." required rows={4} />
      </div>
      <div id="posterUpload" className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="poster" value="Upload poster" />
        </div>
        <FileInput id="poster" helperText="A movie poster" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="trailer" value="Movie trailer" />
        </div>
        <TextInput id="trailer" type="text" placeholder="Add movie trailer URL here" required />
      </div>
      <Button type="submit">Add movie</Button>
    </form>

  )
}

export default MovieForm;







    