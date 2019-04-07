import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import addToMailchimp from 'gatsby-plugin-mailchimp' 
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  state = {
    email: ''
  }
  _handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    console.log(result)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
   

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <h4>Subscribe to my newsletter!</h4>
        If you are looking for more articles like this, feel free to subscribe to my
        bi-weekly newsletter!
        <form onSubmit={this._handleSubmit} style={{margin: 'auto'}}>
           
           <div style={{display: 'flex', justifyContent: 'center', marginBottom: rhythm(1)}}>
            <input style={{borderRadius: '5px', border: '0.5px black solid', padding: '5px'}} type='text' onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} placeholder='Email'/>
            <button style={{borderRadius: '5px', background: 'lightgrey', fontWeight: '600', border: '0.px solid darkgrey', color: '#373738', marginLeft: '10px'}} type='submit'>Subscribe</button>
           </div>
        </form>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        
        <Bio />
     
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
