import React, { FC, useState } from 'react'
import { injectIntl, WrappedComponentProps } from 'react-intl'
import PropTypes from 'prop-types'
import { ColorPicker } from 'vtex.styleguide'

const Colors: FC<WrappedComponentProps & any> = ({
  initialState,
  onChange,
}) => {
  const [state, setState] = useState<any>({
    ...initialState,
    history: [],
  })

  const handleChange = (color: any, picker: string) => {
    const { history } = state

    history.push(color)

    setState({
      ...state,
      history,
      [picker]: color.hex,
    })

    onChange({
      ...initialState,
      [picker]: color.hex,
    })
  }

  return (
    <div className="w-80 pa4">
      <div className="w-50 mb-4">
        <ColorPicker
          color={{ hex: state.base }}
          colorHistory={state.history}
          label="Base"
          onChange={(color: any) => {
            handleChange(color, 'base')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.baseInverted }}
          colorHistory={state.history}
          label="Base inverted"
          onChange={(color: any) => {
            handleChange(color, 'baseInverted')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.actionPrimary }}
          colorHistory={state.history}
          label="Action Primary"
          onChange={(color: any) => {
            handleChange(color, 'actionPrimary')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.actionSecondary }}
          colorHistory={state.history}
          label="Action Secondary"
          onChange={(color: any) => {
            handleChange(color, 'actionSecondary')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.emphasis }}
          colorHistory={state.history}
          label="Emphasis"
          onChange={(color: any) => {
            handleChange(color, 'emphasis')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.disabled }}
          colorHistory={state.history}
          label="Disabled"
          onChange={(color: any) => {
            handleChange(color, 'disabled')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.success }}
          colorHistory={state.history}
          label="Success"
          onChange={(color: any) => {
            handleChange(color, 'success')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.successFaded }}
          colorHistory={state.history}
          label="Success faded"
          onChange={(color: any) => {
            handleChange(color, 'successFaded')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.danger }}
          colorHistory={state.history}
          label="Danger"
          onChange={(color: any) => {
            handleChange(color, 'danger')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.dangerFaded }}
          colorHistory={state.history}
          label="Danger faded"
          onChange={(color: any) => {
            handleChange(color, 'dangerFaded')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.warning }}
          colorHistory={state.history}
          label="Warning"
          onChange={(color: any) => {
            handleChange(color, 'warning')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.warningFaded }}
          colorHistory={state.history}
          label="Warning faded"
          onChange={(color: any) => {
            handleChange(color, 'warningFaded')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted1 }}
          colorHistory={state.history}
          label="Muted 1"
          onChange={(color: any) => {
            handleChange(color, 'muted1')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted2 }}
          colorHistory={state.history}
          label="Muted 2"
          onChange={(color: any) => {
            handleChange(color, 'muted2')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted3 }}
          colorHistory={state.history}
          label="Muted 3"
          onChange={(color: any) => {
            handleChange(color, 'muted3')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted4 }}
          colorHistory={state.history}
          label="Muted 4"
          onChange={(color: any) => {
            handleChange(color, 'muted4')
          }}
        />
      </div>

      <div className="w-50">
        <ColorPicker
          color={{ hex: state.muted5 }}
          colorHistory={state.history}
          label="Muted 5"
          onChange={(color: any) => {
            handleChange(color, 'muted5')
          }}
        />
      </div>
    </div>
  )
}

Colors.propTypes = {
  onChange: PropTypes.func,
  initialState: PropTypes.any,
}

export default injectIntl(Colors)
