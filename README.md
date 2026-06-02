# 5 Real-Time Examples of NumPy

NumPy is a Python library used for fast numerical work with arrays. It is widely used in data science, machine learning, image processing, signal processing, and financial analysis.

This repository includes a working example module: `numpy_examples.py`.

## 1. Financial Data Analysis
NumPy helps analyze stock prices, daily returns, and moving averages efficiently.
Example: A trader can use NumPy to calculate the 3-day moving average of share prices to understand trends.

```python
import numpy as np

prices = np.array([100, 102, 104, 103, 105, 107, 108], dtype=float)
moving_average = np.convolve(prices, np.ones(3) / 3, mode="valid")
print(moving_average)
```

## 2. Data Normalization in Machine Learning
NumPy is often used to normalize data before training a machine learning model.
Example: Test scores, sensor data, or sales data can be scaled so models can process them better.

```python
import numpy as np

data = np.array([3.0, 4.0, 5.0, 6.0, 7.0])
normalized = (data - np.mean(data)) / np.std(data)
print(normalized)
```

## 3. Image Processing
Images can be stored as NumPy arrays, which makes it easy to crop, filter, and process pixel values.
Example: A grayscale image can be treated as a matrix and adjusted by changing pixel values.

```python
import numpy as np

image = np.array([
    [120, 130, 140],
    [110, 125, 135],
    [105, 115, 130]
], dtype=float)
filtered_image = image - np.mean(image)
print(filtered_image)
```

## 4. Signal Processing
NumPy is useful in audio and signal analysis because it supports FFT and other mathematical operations.
Example: Engineers can use NumPy to study frequency patterns in audio signals or vibration data.

```python
import numpy as np

signal = np.sin(np.linspace(0, 2 * np.pi, 100))
fft_result = np.fft.fft(signal)
print(fft_result[:5])
```

## 5. Linear Algebra for Predictions
NumPy provides matrix operations that are important in scientific computing and machine learning.
Example: It can be used to calculate weights in a simple linear regression model.

```python
import numpy as np

X = np.array([
    [1.0, 1.0],
    [1.0, 2.0],
    [1.0, 3.0]
])
y = np.array([2.0, 3.0, 5.0])
weights = np.linalg.inv(X.T @ X) @ X.T @ y
print(weights)
```

## Running the examples
You can run the full set of examples from the command line:

```bash
python numpy_examples.py
```
