// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
//function renderLicenseBadge(license) {
  //if (strLicense=== "") {
    //return (!strLicense)
  //} 
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${response.Title} 

`;
}



//section lay out.

## Table of Contents
*[project](#project)
*[version](#version)
*[description](#description)
*[homepage](#homepage)
*[documentation](#documentation)
*[author](#author)
*[github](#github)
*[twitter](#twitter)
*[prerquisites](#prequisites)
*[licenseName](#licenseName)
*[licenseUrl](#licenseUrl)
*[issue](#issue)
*[install](#install)
*[test](#test)

## 
## project
${response.project}

## version
${response.version}

## description
${response.description}

## homepage
${response.homepage}

## documentation
${response.documentation}

## author
${response.author}

## github
${response.github}

## twitter
${response.twitter}

## prequisites
${response.prequisites}

## licenseName
${response.licenseName}

## licenseUrl
${response.licenseUrl}

## issue
${response.issue}

## install
${response.install}

## test
${response.test}

`;}


module.exports = generateMarkdown;
