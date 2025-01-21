# [FAIR eDNA Website](https://fair-edna.github.io)

Website for eDNA FAIR.

Built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Folder Layout
```
mkdocs.yml: Configuration file
|- docs
|- |- CONTENT.md: Website content in Markdown
|- assets/images/: Images folder
```

## Setup Commands
- Installation:
    ```bash
    git clone https://github.com/FAIR-eDNA/FAIR-eDNA.github.io.git
    ```
- (Optional) For development:
    ```bash
    pip install -r requirements.txt
    ```
- MkDocs commands:
  - `mkdocs serve`: Preview working website on local browser http://127.0.0.1:8000/
  - `mkdocs build`: Build the site

## Usage
- To add new webpage content:
  - Create Markdown file in `/docs`
  - Add filename in `mkdocs.yml` under `nav`
- To update content:
  - Edit individual Markdown files in `/docs`
