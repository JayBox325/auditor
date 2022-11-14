## Auditor

Powerful sustainability auditor for designers, content authors and developers alike. Provides a tool that estimates the CO2e impact from a data transfer. Type in a file transfer size in KB and select a carbon intensity to get the estimated impact and some example comparisons.

### Todo
- [ ] Use an API endpoint to fetch the latest, reliable carbon intensity grids
- [ ] Integrate lighthouse (external Node service?) to perform an audit of a domain name and use this audit to fetch a website's size and perform an audit on that size.
- [ ] Using lighthouse, make top-level suggestions based on the report
- [ ] Ability to upload a file and provide CO2e estimates based on the file size (and also recommend using new tech like WebP if the format is JPG or PNG etc)
- [ ] Ability to analyise an image file and conclude if it has been compressed or not then suggest TinyPNG or something to compress it
- [ ] Add testing with other models
- [ ] Add throttling to perform test on 20 year old computer and 10 year old computer