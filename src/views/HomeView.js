import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};

const HomeView = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>
            Приветственная страница нашего сервиса{' '}
            <span role="img" aria-label="Иконка приветствия">
                💁‍♀️
      </span>
        </h1>
    </div>
);

export default HomeView;
