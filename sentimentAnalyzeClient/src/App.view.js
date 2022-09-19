
import App from './App';
export function HTML(model=new App()) {
    return (  
      <div className="App">
      <button className="btn btn-info" onClick={()=>{model.renderOutput('text')}}>Text</button>
        <button className="btn btn-dark"  onClick={()=>{model.renderOutput('url')}}>URL</button>
        <br/><br/>
        {model.state.innercomp}
        <br/>
        <button className="btn-primary" onClick={model.sendForSentimentAnalysis}>Analyze Sentiment</button>
        <button className="btn-primary" onClick={model.sendForEmotionAnalysis}>Analyze Emotion</button>
        <br/>
            {model.state.sentimentOutput}
      </div>
    );
    }