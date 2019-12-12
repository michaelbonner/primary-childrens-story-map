import React from 'react'
import PropTypes from 'prop-types'
import { StoryTemplate } from '../../templates/story'

const StoryPreview = ({ entry, widgetFor }) => (
  <StoryTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

StoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default StoryPreview
