import pandas as pd
from flask import Blueprint, request
import numpy as np
from joblib import load
import json

model = load('models/heart_disease.joblib')

bp1 = Blueprint('main', __name__, url_prefix='/main')

@bp1.route('/api/run_model', methods=['POST'])
def run_model():
    form_hd_df = pd.DataFrame(request.form, index=[0])
    records_hd = form_hd_df.to_records(index=False)
    results_hd = list(records_hd[0])
    results_hd_as_numpy_array= np.asarray(results_hd)
    results_hd_reshaped = results_hd_as_numpy_array.reshape(1,-1)
    predicted = model.predict(results_hd_reshaped)

    return { 
        'pred': json.dumps(int(predicted[0]))
    }
