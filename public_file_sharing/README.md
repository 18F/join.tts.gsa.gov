# public_file_sharing for TTS Jobs

This directory is for alternate job related file sharing needs. Note that any
file here is open to the public. In general, files should be removed when no longer
needed and public easily searched content should be HTML pages and not files
in this directory.

## Caution!

Before you place a file here make sure:

* It is content for a limited time and limited audience.
* You know how you will share links to the content.
* It is not regular content that should be in `pages`, `postings`, or `assets`.
* You have considered [M-23-22](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/)
  with regard to the content. (Notably: Guidance to use HTML where possible.)
* The file does not contain hidden metadata or other content you would not want
  made public.

The content of this directory through time is retained in revision control
history and open to public inspection.

## File types

Typical file types are supported. Fixed PDFs with additional position information
are the most typical use case.

## File names

It is recommended that you use the included `sluggo.py` script to ensure all
included filenames are URL friendly and easy to reference.
From this directory (`public_file_sharing`) run the following to rename
files you are adding to slug friendly names and return a CSV diff of changes.

~~~sh
./sluggo.py .
~~~
