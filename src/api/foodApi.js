import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default axios.create({
    baseURL : 'https://reactnative.dev'
});

