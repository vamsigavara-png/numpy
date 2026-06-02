# 5 Real-Time Examples of NumPy

NumPy is a Python library used for fast numerical work with arrays. It is widely used in data science, machine learning, image processing, signal processing, and financial analysis [web:5][web:9].

## 1. Financial Data Analysis
NumPy helps analyze stock prices, daily returns, and moving averages efficiently [web:5][web:11].  
Example: A trader can use NumPy to calculate the 3-day moving average of share prices to understand trends [web:5].

```python
import numpy as np

prices = np.array()
moving_average = np.convolve(prices, np.ones(3)/3, mode='valid')
print(moving_average)
```

## 2. Data Normalization in Machine Learning
NumPy is often used to normalize data before training a machine learning model [web:5][web:2].  
Example: Test scores, sensor data, or sales data can be scaled so models can process them better [web:5].

```python
import numpy as np

data = np.array()[3][4][5]
normalized = (data - np.mean(data)) / np.std(data)
print(normalized)
```

## 3. Image Processing
Images can be stored as NumPy arrays, which makes it easy to crop, filter, and process pixel values [web:5][web:11].  
Example: A grayscale image can be treated as a matrix and adjusted by changing pixel values [web:5].

```python
import numpy as np

image = np.array([,
                  ,
                  ])
filtered_image = image - np.mean(image)
print(filtered_image)
```

## 4. Signal Processing
NumPy is useful in audio and signal analysis because it supports FFT and other mathematical operations [web:5][web:9].  
Example: Engineers can use NumPy to study frequency patterns in audio signals or vibration data [web:5].

```python
import numpy as np

signal = np.sin(np.linspace(0, 2 * np.pi, 100))
fft_result = np.fft.fft(signal)
print(fft_result[:5])
```

## 5. Linear Algebra for Predictions
NumPy provides matrix operations that are important in scientific computing and machine learning [web:5][web:9].  
Example: It can be used to calculate weights in a simple linear regression model [web:5].

```python
import numpy as np

X = np.array([,, ])[6][7][8]
y = np.array()[7][8][6]
weights = np.linalg.inv(X.T @ X) @ X.T @ y
print(weights)
```

## Conclusion
NumPy is a powerful tool because it makes numeric calculations faster, simpler, and more organized [web:5]. These examples show how it is used in practical tasks such as finance, AI, image handling, signal analysis, and prediction [web:5][web:11].
