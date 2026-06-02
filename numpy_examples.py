import numpy as np


def financial_moving_average():
    prices = np.array([100, 102, 104, 103, 105, 107, 108], dtype=float)
    window = 3
    moving_average = np.convolve(prices, np.ones(window) / window, mode="valid")

    print("Financial Data Analysis")
    print("Prices:", prices)
    print(f"{window}-day moving average:", moving_average)
    print()


def normalize_data():
    data = np.array([3.0, 4.0, 5.0, 6.0, 7.0])
    normalized = (data - np.mean(data)) / np.std(data)

    print("Data Normalization")
    print("Original data:", data)
    print("Normalized data:", normalized)
    print()


def image_processing():
    image = np.array([
        [120, 130, 140],
        [110, 125, 135],
        [105, 115, 130]
    ], dtype=float)
    filtered_image = image - np.mean(image)

    print("Image Processing")
    print("Original image:\n", image)
    print("Filtered image:\n", filtered_image)
    print()


def signal_processing():
    signal = np.sin(np.linspace(0, 2 * np.pi, 100))
    fft_result = np.fft.fft(signal)

    print("Signal Processing")
    print("Signal first 5 values:", signal[:5])
    print("FFT first 5 values:", fft_result[:5])
    print()


def linear_algebra_prediction():
    X = np.array([
        [1.0, 1.0],
        [1.0, 2.0],
        [1.0, 3.0]
    ])
    y = np.array([2.0, 3.0, 5.0])
    weights = np.linalg.inv(X.T @ X) @ X.T @ y

    print("Linear Algebra for Predictions")
    print("Design matrix X:\n", X)
    print("Target y:", y)
    print("Regression weights:", weights)
    print()


if __name__ == "__main__":
    financial_moving_average()
    normalize_data()
    image_processing()
    signal_processing()
    linear_algebra_prediction()
