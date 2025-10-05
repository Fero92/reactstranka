import React, { useState } from 'react';

const Footer = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment.trim(),
        author: userName.trim(),
        timestamp: new Date().toLocaleString('sk-SK')
      };
      setComments([...comments, comment]);
      setNewComment('');
      // Nezmazávame userName, aby si ho užívateľ nemusel stále vypisovať
    }
  };

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-white/10 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Nadpis sekcie */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">💬 Komentáre</h2>
          <p className="text-white/70">Podeľte sa s nami o vaše názory a skúsenosti</p>
        </div>

        {/* Zobrazenie komentárov */}
        <div className="space-y-4 mb-8">
          {comments.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-white/70">Zatiaľ nie sú žiadne komentáre.</p>
              <p className="text-white/50 text-sm mt-2">Buďte prvý, kto pridá komentár!</p>
            </div>
          ) : (
            <>
              <div className="text-white/80 mb-4">
                📝 Celkom komentárov: <span className="text-yellow-400 font-bold">{comments.length}</span>
              </div>
              {comments.map((comment) => (
                <div key={comment.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {comment.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{comment.author}</h4>
                        <p className="text-white/60 text-sm">📅 {comment.timestamp}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteComment(comment.id)}
                      className="text-red-400 hover:text-red-300 transition-colors text-sm"
                      title="Vymazať komentár"
                    >
                      🗑️
                    </button>
                  </div>
                  <p className="text-white leading-relaxed">{comment.text}</p>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Formulár pre pridanie komentára */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  👤 Vaše meno
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Zadajte vaše meno..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 transition-all"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">
                💭 Váš komentár
              </label>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Napíšte váš komentár..."
                rows="4"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              🚀 Odoslať komentár
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Moja React Aplikácia. Všetky práva vyhradené. 
            <span className="ml-2">Made with ❤️ in Slovakia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;