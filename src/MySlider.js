/**
 * Created by juyoung on 2018-05-16.
 */
import React from 'react';
import Subheader from 'material-ui/Subheader';
import Slider from 'material-ui-slider-label/Slider';
import { cyan500 } from 'material-ui/styles/colors';

const styles = {
    subheader: {
        textTransform: 'capitalize',
    },
    labelStyleOuter: {
        width: '30px',
        height: '30px',
        borderRadius: '50% 50% 50% 0',
        background: cyan500,
        position: 'absolute',
        transform: 'rotate(-45deg)',
        top: '-40px',
        left: '-9px',
    },
    labelStyleInner: {
        transform: 'rotate(45deg)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        top: '5px',
        right: '-3px',
        fontSize: '12px',
    },
};

const SearchRadiusInput = ({ radius, onChange }) => (
    <div>
    <Slider
        defaultValue={5 / 10}
        min={1}
        max={7}
        step={1}
        value={radius}
        onChange={onChange}
        label={
            <div style={styles.labelStyleOuter}>
                <div style={styles.labelStyleInner}>
                    {radius}
                </div>
            </div>
        }
    />
    </div>
);

export default SearchRadiusInput;
